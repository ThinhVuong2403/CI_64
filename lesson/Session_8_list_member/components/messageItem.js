class MessageItem {
    $container;
    $messageContainer;
    $sender;
    $content;

    constructor(sender, content) {

        this.$container = document.createElement('div');
        this.$container.classList.add('flex');
        
        this.$messageContainer = document.createElement('div');
        this.$messageContainer.classList.add('message-item');

        this.$sender = document.createElement('div');
        this.$sender.innerHTML = sender;
        this.$sender.classList.add('sender');

        this.$content = document.createElement('div');
        this.$content.innerHTML = content;
        this.$content.classList.add('content');

        if ( sender === firebase.auth().currentUser.email) {
            this.$container.classList.add('justify-end');
            this.$messageContainer.classList.add('my-message');
        }

    }

    render() {

        this.$messageContainer.appendChild(this.$sender);
        this.$messageContainer.appendChild(this.$content);

        this.$container.appendChild(this.$messageContainer);
        return this.$container;

    }

}

export { MessageItem };