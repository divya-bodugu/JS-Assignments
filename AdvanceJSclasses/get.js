//set()
const marks=new Map();
marks.set("Divya",90);
marks.set("Chandana", 95);
marks.set("Aadhvin",98);
console.log(marks);

//get()
console.log(marks.get("Divya"));
console.log(marks.get("Chandana"));

//has()
console.log(marks.has("Divya"));
console.log(marks.has("divya"));

//delete()
console.log(marks.delete("Divya"));
console.log(marks);

//size()
console.log(marks.size);