import { InfoPanel } from "./infoPanel.js";
import { MessageArea } from "./messageArea.js";
import { SideBar } from "./sideBar.js";
import { TitleBar } from "./titleBar.js";

class Chat {
    activeConversation;
    $container;
    $sideBar;
    $titleBar;
    $messageArea;
    $infoPanel;
    
    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('flex');
        
        this.$sideBar = new SideBar(this.setActiveConversation);

        this.$titleBar = new TitleBar();

        this.activeConversation = null;

        this.$messageArea = new MessageArea();

        this.$infoPanel = new InfoPanel();

    }

   setActiveConversation = (conversation) => {
       this.activeConversation = conversation;
       this.$titleBar.setName(this.activeConversation.name);
       this.$sideBar.setConversation(this.activeConversation);
       this.$messageArea.setConversation(this.activeConversation);
   }

    render() {
        this.$container.appendChild(this.$sideBar.render());
        const chatArea = document.createElement('div');
        chatArea.classList.add('flex-1', 'flex-col', 'flex');
        chatArea.appendChild(this.$titleBar.render());

        const messageAreaContainer = document.createElement('div');
        messageAreaContainer.classList.add('flex', 'flex-1');
        messageAreaContainer.appendChild(this.$messageArea.render());
        messageAreaContainer.appendChild(this.$infoPanel.render());

        chatArea.appendChild(messageAreaContainer);

        this.$container.appendChild(chatArea);

        return this.$container;
    }

}

export { Chat };