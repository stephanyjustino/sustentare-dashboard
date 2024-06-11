class Pilha {
    constructor() {
        this.items = [];
    }

    // Método para adicionar um elemento ao topo da pilha
    push(element) {
        this.items.push(element);
    }

    // Método para remover o elemento do topo da pilha e retorná-lo
    pop() {
        if (this.isEmpty()) {
            return "A pilha está vazia";
        }
        return this.items.pop();
    }

    // Método para retornar o elemento do topo da pilha sem removê-lo
    peek() {
        return this.items[this.items.length - 1];
    }

    // Método para verificar se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Método para retornar o tamanho da pilha
    size() {
        return this.items.length;
    }
}
export default Pilha