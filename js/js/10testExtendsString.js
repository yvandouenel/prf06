class CustomString extends String {
  split(separator){
    const initial_splited_array = super.split(separator);
    let custom_splited_array = [];
    for(let i = 0; i < initial_splited_array.length ; i++) {
      let sep = (i == initial_splited_array.length -1 ) ? "" : separator;
      custom_splited_array[i] = initial_splited_array[i] + sep;
    }
    return [initial_splited_array, custom_splited_array];
  }
}

const hw = new CustomString("Hello World");
console.log(`hw splited : `, hw.split("o"));
console.log(`hw : `, hw);