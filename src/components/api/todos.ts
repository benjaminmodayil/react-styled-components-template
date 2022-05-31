class TodosApi {
  static async getTodos() {
    const url = `/todos`;
    const method = 'GET';
    const options = { method };
    const response = await fetch(url, options);
    const json = await response.json();
    return json.data;
  }

  // Other APIs go below here.
}

export default TodosApi;
