import { CreateConversationModal } from "./createConversationModal.js";

class SideBar {

    $container;
    $buttonCreateConversation;
    $conversationList;
    $createConversationModal;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.style.width = '200px';

        this.$buttonCreateConversation = document.createElement('button');
        this.$buttonCreateConversation.innerHTML = ' + New';
        this.$buttonCreateConversation.addEventListener('click', this.handleCreateConversation);

        this.$createConversationModal = new CreateConversationModal();
        this.$createConversationModal.setVisible(false);

    }

    handleCreateConversation = () => {
        this.$createConversationModal.setVisible(true);
    }

    render() {
        this.$container.appendChild(this.$buttonCreateConversation);
        this.$container.appendChild(this.$createConversationModal.render());
        return this.$container;

    }

}

export { SideBar };