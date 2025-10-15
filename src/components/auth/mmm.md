<form>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-[13px] text-[#22303EE5]">
            Username?
          </legend>
          <input
            type="text"
            className="input bg-transparent focus:outline-hidden border border-gray-500 text-[15px] text-[#22303E66]"
            placeholder="Enter your username"
          />
          {/* <p className="label">Optional</p> */}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-[13px] text-[#22303EE5]">
            Email
          </legend>
          <input
            type="text"
            className="input bg-transparent focus:outline-hidden border border-gray-500 text-[15px] text-[#22303E66]"
            placeholder="Enter your email"
          />
          {/* <p className="label">Optional</p> */}
        </fieldset>
        <fieldset className="fieldset relative">
          <legend className="fieldset-legend text-[13px] text-[#22303EE5]">
            Password
          </legend>
          <input
            type={showPassword ? "text" : "password"}
            className="input bg-transparent focus:outline-hidden border border-gray-500 text-[15px] text-[#22303E66]"
            placeholder="Enter your password"
          />
          {/* <p className="label">Optional</p> */}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2  text-[#22303E66]"
          >
            {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
          </button>
        </fieldset>

        {/* <div className="flex items-start mb-5 text-red-500">
          <div className="flex items-center h-5 text-red-500">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded-sm text-red-500"
              required
            />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">
            I agree to
            <a href="#" className="text-blue-600 hover:underline">
              terms and conditions
            </a>
          </label>
        </div> */}
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              name="password"
              type="password"
              required
              className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-4 h-4 absolute right-4 cursor-pointer"
              viewBox="0 0 128 128"
            >
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
        </div>

        <button>Sign Up</button>
        <p>
          Already have an account? <a href="">Sign in instead</a>
        </p>
      </form>