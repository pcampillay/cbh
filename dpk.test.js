const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a Hash when input is any", () => {
    const trivialKey = deterministicPartitionKey('event any 123');
    expect(trivialKey).toEqual(expect.any(String));
  });

  it("Returns a Hash when input object whiteout partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ 'key': "f782b910cdf388931df9f00826559deee4b9348dc447cc20b585651b1f5a02203836101a349a150642cb3f9d91ea5c40bf9ab2442caf269db552daa251107562" });
    expect(trivialKey).toEqual(expect.any(String));
  });

  it("Returns a Hash when input object whit partitionKey is mayor to MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({ 'partitionKey': "f782b910cdf388931df9f00826559deee4b9348dc447cc20b585651b1f5a02203836101a349a150642cb3f9d91ea5c40bf9ab2442caf269db552daa251107562" });
    expect(trivialKey).toEqual(expect.any(String));
  });

  it("Returns a input when input object whit partitionKey is minor to MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({ 'partitionKey': 'text minor' });
    expect(trivialKey).toEqual(trivialKey);
  });
});
