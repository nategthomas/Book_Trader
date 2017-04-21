export var User = (function () {
    function User(email, password, firstName, lastName, address1, address2, city, state, zip, country) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
    return User;
}());
//# sourceMappingURL=user.model.js.map