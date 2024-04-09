import Popup from "reactjs-popup";

export default function PopupB() {
  return (
    <div>
      <Popup trigger={<button>Обучение</button>} modal nested>
        {(close) => (
          <div className="modal">
            <div className="content-features-targets">
              <div onClick={() => close()}>X</div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
