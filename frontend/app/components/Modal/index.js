const Modal = ({ isOpen, onClose, job_title, job_company, handleApply, user_name }) => {
  if (!isOpen) return null;

  return (
    <section className="py-10 px-[15px] h-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col gap-10  max-w-[400px] w-full bg-white rounded-2xl px-4 py-4 text-textDefault">
        <div className="text-lg text-center">
          Hi, {user_name}. <br/> Did you apply the for the
          <span className="font-semibold"> {job_title}</span> role at
          <span className="font-semibold"> {job_company}</span>?
        </div>

        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={handleApply}
            type="button"
            className="bg-white hover:bg-primary hover:text-white text-sm tablet:text-base py-2 px-8 flex justify-center items-center hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            type="button"
            className="bg-white hover:bg-primary hover:text-white text-sm tablet:text-base py-2 px-8 flex justify-center items-center hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center"
          >
            No
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
