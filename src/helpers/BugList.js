// {
//     name: String,
//     completed: Boolean,
//     submitDate: Date,
//     completedDate: Date,
//     userID: Number,
//     description: String
//   }

const bugList = [
  {
    name: 'Bug1',
    completed: false,
    submitDate: Date.now(),
    completedDate: null,
    userID: 1,
    description: 'First Bug',
  },
  {
    name: 'Bug2',
    completed: true,
    submitDate: Date.now(),
    completedDate: Date.now(),
    userID: 1,
    description: 'Second Bug',
  },
  {
    name: 'Bug3',
    completed: false,
    submitDate: Date.now(),
    completedDate: null,
    userID: 2,
    description: 'Third Bug',
  },
];

export {bugList}