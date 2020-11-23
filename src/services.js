class HttpServices {
  _baseUrl = "https://reqres.in/api/users?per_page=12";

  async getData(url) {
    const response = await fetch(`${this._baseUrl}${url}`);
    if (!response.ok) {
      throw new Error(`We have a problem with fetch ${url}!!!`);
    }
    return await response.json();
  }

  getAllEmployees = async () => {
    const response = await this.getData();
    return response.data.map((this.transformEmployee));
}

  transformEmployee = (emp) => {
    return {
      id: emp.id,
      firstName: emp.first_name,
      lastName: emp.last_name,
    };
  };
}

export default HttpServices;
