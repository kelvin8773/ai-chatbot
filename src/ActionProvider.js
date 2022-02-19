class ActionProvider{
    constructor(createChatBotMessage, setStateFunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;

        this.handleJavascript = this.handleJavascript.bind(this)
        this.greet = this.greet.bind(this)
    }

    handleJavascript(){
        console.log("hahaha")
        const jsMessage = this.createChatBotMessage("Display all Javascript resource...");

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, jsMessage]
        }))
    }

    greet(){
         //const greetMessage = this.createChatBotMessage("Hi, Friend", {widget: "learningOptions"});
        //const greetMessage = "Hi"
        const greetMessage = this.createChatBotMessage("Hi, Friend");

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, greetMessage]
        }))
    }
}

export default ActionProvider;