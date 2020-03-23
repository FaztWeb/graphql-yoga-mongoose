import User from "./models/User";

export const resolvers = {
  Query: {
    getUsers: () => User.find(),
    getUser: async (_, {id}) => {
      return await User.findById(id)
    }
  },
  Mutation: {
    createUser: async (_, {nickname, fullname, phone, city}) => {
      const user = new User({nickname, fullname, phone, city});
      return await user.save();
    },
    deleteUser: async (_, {id}) => {
      return await User.findByIdAndDelete(id);
    }
  }
}