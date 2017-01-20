function ContactsViewModel() {
    var self = this;
    self.contacts = ko.observableArray([]);
    self.addContact = function () {
        $.post("api/contacts",
            $("#addContact").serialize(),
            function (value) {
                self.contacts.push(value);
            },
            "json");
    }
    self.removeContact = function (contact) {
        $.ajax({
            type: "DELETE",
            url: contact.Self,
            success: function () {
                self.contacts.remove(contact);
            }
        });
    }

    $.getJSON("api/contacts", function (data) {
        self.contacts(data);
    });
}