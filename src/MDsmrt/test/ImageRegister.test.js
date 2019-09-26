const ImageRegister = artifacts.require('./ImageRegister.sol')
const truffleAssert = require('truffle-assertions')

// test suite
contract('ImageRegister', (accounts) => {
  // Contract instance
  let imageRegisterInstance

  // A few owner accounts
  const owner = accounts[0]
  const doctor = accounts[1]
  const emptyAddress = '0x0000000000000000000000000000000000000000'

  // Imaage 1 details
  const ipfsHash1 = 'QmWWQSuPMS6aXCbZKpEjPHPUZN2NjB3YrhJTHsV4X3vb2t'
  const title1 = 'CT Scan on Monday'
  const patientID1 = '192837'
  const description1 = 'Scan may include cancer'
  const tags1 = 'CT'

  // Create a new instance of the contract before each test
  beforeEach('Smart contract setup for each Test', async () => {
    imageRegisterInstance = await ImageRegister.new(accounts[0])
  })

  // It should have an owner
  it('The smart contract has an owner', async () => {
    assert.equal(await imageRegisterInstance.owner(), owner, 'has an owner')
  })

  // It should support self-destruction i.e. mortal pattern
  it('The smart contract can self destruct', async () => {
    try {
      await imageRegisterInstance.destroy()
    } catch (err) {
      assert.fail('owner unable to selfdestruct')
    }
  })

  // It should store an image on the blockchain
  it('The smart contract can store a scan', async () => {
    const success = await imageRegisterInstance.uploadImage.call(
      ipfsHash1,
      title1,
      patientID1,
      description1,
      tags1
    )
    assert.equal(success, true, 'it returns true')
  })

  it('The smart contract should emit a LogScanUploaded event when storing an scan', async () => {
    const tx = await imageRegisterInstance.uploadImage(
      ipfsHash1,
      title1,
      patientID1,
      description1,
      tags1
    )

    truffleAssert.eventEmitted(tx, 'LogImageUploaded', (ev) => {
      return (
        ev._owner === owner &&
        ev._ipfsHash === ipfsHash1 &&
        ev._patientID == patientID1 &&
        ev._title === title1 &&
        ev._description === description1 &&
        ev._tags === tags1 &&
        ev._uploadedOn.toNumber() !== 0
      )
    })
  })

  // It should return details of an image previously stored on the blockchain
  it('The smart contract should return the details from the scan', async () => {
    await imageRegisterInstance.uploadImage(
      ipfsHash1,
      title1,
      patientID1,
      description1,
      tags1,
      {
        from: owner,
      }
    )

    const image = await imageRegisterInstance.getImage(owner, 0)

    assert.equal(
      image[0],
      ipfsHash1,
      'the IPFS hash does not match the expected value'
    )
    assert.equal(
      image[1],
      title1,
      'the title does not match the expected value'
    )
    assert.equal(
      image[2],
      patientID1,
      'the title does not match the expected value'
    )
    assert.equal(
      image[3],
      description1,
      'the description does not match the expected value'
    )
    assert.equal(image[4], tags1, 'the tags do not match the expected value')
    assert.notEqual(image[5], 0, 'the uploadedOn date should be non-zero')
  })

  // It should require a valid IPFS hash
  it('The smart contract should require a valid IPFS hash when uploading a scan', async () => {
    const badIPFSHash = ipfsHash1.slice(0, ipfsHash1.length / 2)

    try {
      await imageRegisterInstance.uploadImage(
        '',
        title1,
        patientID1,
        description1,
        tags1,
        {
          from: owner,
        }
      )
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }

    try {
      await imageRegisterInstance.uploadImage(
        badIPFSHash,
        title1,
        patientID1,
        description1,
        tags1,
        {
          from: owner,
        }
      )
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }
  })

  // It should require a valid title where the length cannot be greater than 256
  it('The smart contract should require a valid title when uploading a scan', async () => {
    try {
      await imageRegisterInstance.uploadImage(
        ipfsHash1,
        '',
        patientID1,
        description1,
        tags1,
        {
          from: owner,
        }
      )
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }

    try {
      await imageRegisterInstance.uploadImage(
        ipfsHash1,
        'X'.repeat(257),
        patientID1,
        description1,
        tags1,
        {
          from: owner,
        }
      )
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }
  })

  it('The smart contract should require a valid patientID when uploading a scan', async () => {
    try {
      await imageRegisterInstance.uploadImage(
        ipfsHash1,
        title1,
        '',
        description1,
        tags1,
        {
          from: owner,
        }
      )
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }

    try {
      await imageRegisterInstance.uploadImage(
        ipfsHash1,
        title1,
        'X'.repeat(257),
        description1,
        tags1,
        {
          from: owner,
        }
      )
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }
  })

  // It should require a valid description where the length cannot be greater than 1024
  it('The smart contract should require a valid description when uploading a scan', async () => {
    try {
      await imageRegisterInstance.uploadImage(
        ipfsHash1,
        title1,
        patientID1,
        '',
        tags1,
        {
          from: owner,
        }
      )
    } catch (error) {
      assert.fail('Unexpected throw received')
    }

    try {
      await imageRegisterInstance.uploadImage(
        ipfsHash1,
        title1,
        patientID1,
        'X'.repeat(1025),
        tags1,
        {
          from: owner,
        }
      )
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }
  })

  // It should require tags where the combined list length cannot be greater than 256
  it('The smart contract should require tags when uploading a scan', async () => {
    try {
      await imageRegisterInstance.uploadImage(
        ipfsHash1,
        title1,
        patientID1,
        description1,
        '',
        {
          from: owner,
        }
      )
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }

    try {
      await imageRegisterInstance.uploadImage(
        ipfsHash1,
        title1,
        patientID1,
        description1,
        'X'.repeat(257),
        {
          from: owner,
        }
      )
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }
  })

  // It should require an owner address when retriving the image count
  it('The smart contract should have a valid address when the scan counts', async () => {
    try {
      await imageRegisterInstance.getImageCount(emptyAddress)
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }
  })

  // It should require a valid index when retrieving image details
  it('The smart contract should require a valid index when retrieving details of a scan', async () => {
    try {
      await imageRegisterInstance.getImage(owner, -1)
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }

    try {
      await imageRegisterInstance.getImage(owner, 257)
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }

    try {
      await imageRegisterInstance.getImage(owner, 0)
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }
  })

  // Only the contracgt owner can perform an emergency stop
  it('The smart contract should allow the owner to perform an emergency stop', async () => {
    await imageRegisterInstance.emergencyStop(true, { from: owner })
  })

  // It should fail if anyone other than the contract owner attempts to
  // perform an emergency stop
  it('The smart contract should disallow a non-owner to perform an emergency stop', async () => {
    try {
      await imageRegisterInstance.emergencyStop(true, { from: doctor })
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }
  })

  // It should disallow uploading an image when the contract is paused
  it('The smart contract should disallow uploading a scan when there is an emergency stop', async () => {
    await imageRegisterInstance.emergencyStop(true, { from: owner })

    try {
      await imageRegisterInstance.uploadImage(
        ipfsHash1,
        title1,
        patientID1,
        description1,
        '',
        {
          from: doctor,
        }
      )
      assert.fail('Expected throw not received')
    } catch (error) {
      assert(
        error.message.indexOf('revert') >= 0,
        'error message must contain revert'
      )
    }
  })

  // It should log an LogEmergency event when pausing / restarting a contract
  it('The smart contract should emit a LogEmergencyStop event when performing an emergency stop', async () => {
    const tx = await imageRegisterInstance.emergencyStop(true, { from: owner })

    truffleAssert.eventEmitted(tx, 'LogEmergencyStop', (ev) => {
      return ev._owner === owner && ev._stop === true
    })
  })
})
