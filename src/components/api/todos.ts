class TodosApi {
  static async getSomething() {
    const url = `/test`;
    const method = 'GET';
    const options = { method };
    const response = await fetch(url, options);
    const json = await response.json();
    return json.data;
  }

  // Other APIs go below here.
}

export default TodosApi;
