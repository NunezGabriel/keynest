const LaandlordRegister = () => {
  return (
    <div>
      <div className="w-full h-[352px] bg-[#bad8e7] text-center py-16"></div>
      <div className="bg-white rounded-lg shadow-md max-w-[388px] p-4">
        <h2 className="text-2xl text-center">Create your Account</h2>

        <form className="flex flex-col gap-2">
          <div className="flex flex-col ">
            <label>NAME</label>
            <input
              className="p-2 border border-[#1290cb] rounded-lg"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col ">
            <label>EMAIL</label>
            <input
              className="p-2 border border-[#1290cb] rounded-lg"
              type="email"
              id="email"
              name="email"
              placeholder="user@mail.com"
            />
          </div>

          <div className="flex flex-col ">
            <label>PHONE</label>
            <input
              className="p-2 border border-[#1290cb] rounded-lg"
              type="tel"
              id="phone"
              name="phone"
              placeholder="999-999-999"
            />
          </div>

          <div className="flex flex-col ">
            <label>PASSWORD</label>
            <input
              className="p-2 border border-[#1290cb] rounded-lg"
              type="password"
              id="password"
              name="password"
              placeholder="******"
            />
            <small class="helper-text">At least 6 characters</small>
          </div>

          <div className="flex flex-col ">
            <label for="confirm-password">PASSWORD CONFIRMATION</label>
            <input
              className="p-2 border border-[#1290cb] rounded-lg"
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="******"
            />
          </div>

          <button type="submit" class="submit-btn">
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

export default LaandlordRegister;
