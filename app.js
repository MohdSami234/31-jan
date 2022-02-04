var nums = [2, 7, 11, 15, 14, 5, 9, 6];
document.write(nums);
document.write(`<br>`);

for (let i = 0; i < nums.length; i++) {
  if (nums[i] + nums[i + 1] == 19) {
    document.write(`The postion of the first element --  ${i}`);
    document.write(`<br/>`);
    document.write(`The postion of the Second elemen -- ${i + 1}`);
  }
}
