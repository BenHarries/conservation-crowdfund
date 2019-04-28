import { shallow } from "enzyme";

import Features from "./con-web/src/components/features";

describe("ExampleComponent", () => {
  it("fetches data from server when server returns a successful response", done => {
    // 1
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({
      // 3
      json: () => mockJsonPromise
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise); // 4

    const wrapper = shallow(<Features />); // 5

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://url-of-your-server.com/example/json"
    );

    process.nextTick(() => {
      // 6
      expect(wrapper.state()).toEqual({
        // ... assert the set state
      });

      global.fetch.mockClear(); // 7
      done(); // 8
    });
  });
});
