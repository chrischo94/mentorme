import axios from "axios";

export default {
    search: function() {
        return axios.get("/api/secret")
    },
    getUsers: function() {
        return axios.get("/api/users")
    },
    getUser: function(id) {
        return axios.get("/api/users/" + id);
      },
      // Deletes the user with the given id
    deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
    },
    // Saves a user to the database
    saveUser: function(userData) {
    return axios.post("/api/users", userData);
    },
    getLibraries: function() {
        return axios.get("/api/Library")
    },
    getLibrary: function(id) {
        return axios.get("/api/Library/" + id);
      },
}; 