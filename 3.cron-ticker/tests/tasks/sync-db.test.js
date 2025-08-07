const { syncDB } = require("../../tasks/sync-db");

describe("Pruebas en SyncDB", () => {
  test("2ble ejecucion del proceso", () => {
    syncDB();
    const result = syncDB();
    expect(result).toBeDefined();

    expect(result).toBe(2);
  });
});
