const app = Vue.createApp({
    data() {
        return {
            income: 0,
            expense: 0,
            other: 0,
            type: '',
            amount: ''
        }
    },
    methods: {
        optionSelection(event) {
            this.type = event.target.value;
        },
        save() {
            if (this.type === '') {
                alert("Please Select any option ");
            }
            else if (this.amount === '') {
                alert("Please enter some amount");
            }
            else {
                if (this.type === 'income') {
                    this.income = this.income + parseInt(this.amount);
                }
                if (this.type === 'expense') {
                    this.expense = this.expense + parseInt(this.amount);

                }
                if (this.type === 'other') {
                    this.other = this.other + parseInt(this.amount);

                }
                this.clear();
            }
        },
        clear() {
            this.type = '';
            this.amount = '';
        }
    }
})

app.mount("#app")