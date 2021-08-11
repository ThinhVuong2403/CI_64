class InputGroup {

    $container;
    $label;
    $input;
    $feedback;

    constructor(label, inputType) {
        this.$container = document.createElement('div');
        this.$container.style.display = 'flex';
        this.$container.style.flexDirection = "column";
        this.$container.classList.add('Container');

        this.$label = document.createElement('label');
        this.$label.innerHTML = label;

        this.$input = document.createElement('input');
        this.$input.type = inputType;
        
        this.$feedback = document.createElement('span');
    }

    setSuccessMessage = (message) => {
        this.$feedback.innerHTML = message;
    };

    setErrorMessage = (message) => {
        this.$feedback.innerHTML = message;
    };

    render(){
        this.$container.appendChild(this.$label);
        this.$container.appendChild(this.$input);
        this.$container.appendChild(this.$feedback);

        return this.$container;
    }
}