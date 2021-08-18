class InfoPanel {

    $container;
    $formAddUser;
    $input;
    $btnAddUser;

    $userList;

    constructor() {

        this.$container = document.createElement('div');
        this.$container.style.width = '200px';
        this.$container.style.borderLeft = '1px solid #ececec';

        this.$formAddUser = document.createElement('form');
        this.$formAddUser.classList.add('flex');

        this.$input = document.createElement('input');
        this.$input.type = 'email';
        this.$input.placeholder = 'Enter user mail ...';
        this.$input.style.width = '100%';//need to conflic

        this.$btnAddUser = document.createElement('button');
        this.$btnAddUser.type = 'submit';
        this.$btnAddUser.innerHTML = 'Add';

        this.$userList = document.createElement('ul');

    }

    render() {

        this.$formAddUser.appendChild(this.$input);
        this.$formAddUser.appendChild(this.$btnAddUser);

        this.$container.appendChild(this.$formAddUser);
        this.$container.appendChild(this.$userList);

        return this.$container;

    }

}

export { InfoPanel };