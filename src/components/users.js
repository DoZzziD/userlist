export default {
  name: "users",
  data() {
    return {
      newUser: {},
      users: [
        { name: "John Doe", email: "jdoe@gmail.com", contacted: false },
        { name: "Steven Smith", email: "ssmith@gmail.com", contacted: false },
        { name: "Stevenn Smith", email: "ssmith@gmail.com", contacted: false },
        {
          name: "Myself the Hamburger helper",
          email: "hamburger@gmail.com",
          contacted: true
        }
      ]
    };
  },
  methods: {
    addUser: function(e) {
      e.preventDefault();

      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contact: false
      });
      console.log("new user added.");
    }
  }
};
