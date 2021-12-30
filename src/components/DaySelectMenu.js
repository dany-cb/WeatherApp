const DaySelectMenu = ({ blockName, ariaLabel = "", items, opt, setOpt }) => {
  return (
    <nav className={blockName} aria-label={ariaLabel}>
      {items.map((item, i) => {
        return (
          <div
            key={item}
            role="link"
            tabIndex={0}
            className={
              opt === i
                ? `${blockName}-item ${blockName}-item_active`
                : `${blockName}-item`
            }
            onClick={() => {
              if (opt != i) setOpt(i);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                // Trigger the button element with a click
                e.target.click();
                e.stopPropagation();
              }
            }}
          >
            {item}
          </div>
        );
      })}
    </nav>
  );
};

export default DaySelectMenu;
