export default class Fetcher {
  static fetchUniversity = async (country) => {
    const response = await fetch(
      `http://universities.hipolabs.com/search?country=${country}`
    );
    if (response.ok) {
      return await response.json();
    }
  };
}
