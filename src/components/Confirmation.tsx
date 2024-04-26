const Confirmation = () => {
  return (
    <div className="h-full flex flex-col gap-2 justify-center items-center">
      <img src="/images/icon-thank-you.svg" alt="icon" />
      <h1 className="text-2xl font-bold mt-2 text-primary-marine-blue">
        Thank you!
      </h1>
      <p className="text-center text-neutral-cool-gray">
        Thanks for confirming your subscriptions! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Confirmation;
