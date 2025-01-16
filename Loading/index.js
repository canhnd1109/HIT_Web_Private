const arr = [1, 2, 3, 4, 5, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const rs1 = arr.filter((item, index, array) => {
    return item % 2 === 0;
});
console.log('🚀 ~ rs1 ~ rs1:', rs1);

const rs2 = arr.find((item) => {
    return item % 2 === 0;
});
console.log('🚀 ~ rs2 ~ rs2:', rs2);

const rs3 = arr.map((item) => {
    return item * 2;
});
console.log('🚀 ~ rs3 ~ rs3:', rs3);
