let values = [];
for (let i = 0; i < 15; i++) {
    values[i] = Math.ceil(Math.random() * 2.2);

}
//const data = tf.tensor([0, 0, 0, 0], [2, 2]);
//data.print();
//tf.tensor(values).print();
const data = tf.tensor2d(values, [5, 3], 'float32');
console.log(data);
data.print();
console.log(data.dataSync());
let x = tf.variable(tf.tensor([1, 2, 4]));
x.assign(tf.tensor([5, 6, 7]));
x.print();

let m1 = [2, 2, 2, 2];
let m2 = [2, 2, 2, 2];
let m3;
m1 = tf.tensor(m1, [2, 2]);
m2 = tf.tensor(m2, [2, 2]);
m1.mul(m2).print();
m1.matMul(m2).print();