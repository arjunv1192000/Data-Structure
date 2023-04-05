
class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
    removeEdge(vertex1,vertex2){
      this.adjacencyList[vertex1].delete(vertex2)
      this.adjacencyList[vertex2].delete(vertex1)
    }
  
    display() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
      }
    }


    bfs(startvertex){
      const visited={}
      const queue=[]
      visited[startvertex]=true
      queue.push(startvertex)

      while(queue.length !==0){
        let vertex=queue.shift()
        console.log(vertex);
        this.adjacencyList[vertex].forEach(element => {
          if(!visited[element]){
            visited[element]=true
            queue.push(element)
          }
          
        });
      }
    }
    

    dfs(startVertex) {
      const visited = {};
      const stack = [];
      visited[startVertex] = true;
      stack.push(startVertex);
  
      while (stack.length !== 0) {
        let vertex = stack.pop();
        console.log(vertex);
        this.adjacencyList[vertex].forEach((element) => {
          if (!visited[element]) {
            visited[element] = true;
            stack.push(element);
          }
        });
      }
    }

  }
  
  const graph = new Graph();
  graph.addVertex(2);
  graph.addVertex(4);
  graph.addVertex(6);
  graph.addVertex(8);
  graph.addVertex(7);
  graph.addVertex(10)
  graph.addEdge(6, 4);
  graph.addEdge(4, 2);
  graph.addEdge(6, 2);
  graph.addEdge(6, 8);
  graph.addEdge(2, 7);
  graph.display()
  graph.bfs(6)
  // console.log("");
  // graph.bfs(4)
  
  