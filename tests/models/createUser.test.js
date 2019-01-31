const Model = require('../../models');
// console.log(Model);
describe('generate', () => {
  beforeEach(async () => {
    await Model.user.truncate();
  });
  it('should create users in the table and insert name', async () => {
    await Model.user.generate('yash', 'guptayash955@gmail.com');
    await Model.user.generate('Vibhore', 'vibhore97@gmail.com');
    await Model.user.generate('Ayushi', 'ayushi_nigam@mckinsey.com');
    await Model.user.generate('Abhinav', 'abhinav_dhasmana@mckinsey.com');
    expect(await Model.user.count()).toEqual(4);
  });
});

describe('getAllUser', () => {
  beforeEach(() => {
    Model.user.truncate();
  });
  it('should return  entries in the table', async () => {
    await Model.user.generate('yash', 'guptayash955@gmail.com');
    const users = await Model.user.getAllUser();
    expect(users.length).toEqual(1);
  });
  it('should return the value of the inserted data', async () => {
    await Model.user.generate('yash', 'guptayash955@gmail.com');
    const users = await Model.user.getAllUser();
    expect(users[0].dataValues.name).toEqual('yash');
  });
  it('should return undefined when we have an empty table', async () => {
    const users = await Model.user.getAllUser();
    // expect(users[0]).toEqual(undefined);
    expect(users[0]).not.toEqual('Anmol Varma');
  });
});


afterAll(() => {
  Model.user.sequelize.close();
});
