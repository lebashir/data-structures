class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
        
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        vertex => vertex !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        vertex => vertex !== vertex1
        );
    }
    removeVertex(vertex) {
        for (let edge of this.adjacencyList[vertex]) {
            this.removeEdge(edge,vertex)
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start) {
        let result = [];
        let visited = {};
       
        const dfs = (vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }
        dfs(start);
        return result;
    }
    depthFirstIterative(start) {
        const stack = [start];
        let result = [];
        let visited = {};
        let currVertex;
        visited[start] = true;

        while (stack.length){
            currVertex = stack.pop();
            result.push(currVertex);
            this.adjacencyList[currVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });   
        } 
        return result;
    }
    breadthFirst(start) {
        const queue = [start];
        let result = [];
        let visited ={};
        let currVertex;
        visited[start]= true;
        while(queue.length) {
            currVertex = queue.shift()
            result.push(currVertex);
            this.adjacencyList[currVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}