import { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { DownOutlined } from "@ant-design/icons";

import BaseCard from "../BaseCard";

import styles from "./index.module.css";
import { filter } from "../../../const/datePicker";

const today = new Date();
const yesterday = new Date();
const beforeYesterday = new Date();
const lastWeek = new Date();
const lastMonth = new Date();
const firstDayMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const lastSixMonth = new Date();
yesterday.setDate(today.getDate() - 1);
beforeYesterday.setDate(today.getDate() - 2);
lastWeek.setDate(today.getDate() - 7);
lastMonth.setDate(today.getDate() - 30);
lastSixMonth.setMonth(today.getMonth() - 6);

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button className={styles["button--datepicker"]} onClick={onClick} ref={ref} type="button">
    {value}
  </button>
));

CustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

CustomInput.defaultProps = {
  value: "",
  onClick: () => {}
};

const DatePickerCard = () => {
  const [startDate, setStartDate] = useState(beforeYesterday);
  const [endDate, setEndDate] = useState(yesterday);
  const [selectedActionButton, setSelectedActionButton] = useState("");

  const handleChangeDatePicker = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleClickActionButton = key => {
    setSelectedActionButton(key);
  };

  const handleClickSubmitActionButton = () => {
    if (selectedActionButton === filter.today) {
      setStartDate(today);
      setEndDate(today);
    }
    if (selectedActionButton === filter.yesterday) {
      setStartDate(yesterday);
      setEndDate(yesterday);
    }
    if (selectedActionButton === filter.lastWeek) {
      setStartDate(lastWeek);
      setEndDate(yesterday);
    }
    if (selectedActionButton === filter.lastMonth) {
      setStartDate(lastMonth);
      setEndDate(yesterday);
    }
    if (selectedActionButton === filter.thisMonth) {
      setStartDate(firstDayMonth);
      setEndDate(yesterday);
    }
  };

  const CardContainer = ({ children, className }) => (
    <BaseCard className={styles["datepicker--card"]} isShowBorder isShowBoxShadow>
      <div className={styles["datepicker--container"]}>
        <div className={styles["datepicker--action"]}>
          <button
            type="button"
            className={`${styles["datepicker--action-button"]} ${selectedActionButton === filter.today &&
              styles["datepicker--action-button-active"]}`}
            onClick={() => handleClickActionButton(filter.today)}
          >
            Today
          </button>
          <button
            type="button"
            className={`${styles["datepicker--action-button"]} ${selectedActionButton === filter.yesterday &&
              styles["datepicker--action-button-active"]}`}
            onClick={() => handleClickActionButton(filter.yesterday)}
          >
            Yesterday
          </button>
          <button
            type="button"
            className={`${styles["datepicker--action-button"]} ${selectedActionButton === filter.lastWeek &&
              styles["datepicker--action-button-active"]}`}
            onClick={() => handleClickActionButton(filter.lastWeek)}
          >
            Last 7 days
          </button>
          <button
            type="button"
            className={`${styles["datepicker--action-button"]} ${selectedActionButton === filter.lastMonth &&
              styles["datepicker--action-button-active"]}`}
            onClick={() => handleClickActionButton(filter.lastMonth)}
          >
            Last 30 days
          </button>
          <button
            type="button"
            className={`${styles["datepicker--action-button"]} ${selectedActionButton === filter.thisMonth &&
              styles["datepicker--action-button-active"]}`}
            onClick={() => handleClickActionButton(filter.thisMonth)}
          >
            This Month
          </button>
          <button
            type="button"
            className={`${styles["datepicker--action-button"]} ${styles["datepicker--action-button--last"]} ${selectedActionButton ===
              filter.custom && styles["datepicker--action-button-active"]}`}
            onClick={() => handleClickActionButton(filter.custom)}
          >
            Custom
          </button>
          <button
            type="button"
            className={`${styles["datepicker--action-button"]} ${styles["datepicker--action-button--submit"]}`}
            onClick={handleClickSubmitActionButton}
          >
            Apply
          </button>
        </div>
        <CalendarContainer className={`${styles["datepicker--date"]} ${className}`}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    </BaseCard>
  );

  CardContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(), PropTypes.node]),
    className: PropTypes.string
  };

  CardContainer.defaultProps = {
    children: null,
    className: ""
  };

  return (
    <BaseCard className={styles["main-card"]} isShowBorder isShowBoxShadow>
      <div className={styles["main-card--container"]}>
        <div className={styles["main-card--info"]}>
          <img src="./assets/icon/calendar-icon.png" alt="calendar" className={styles.icon} />
          <p>Period</p>
        </div>
        <div className={styles["main-card--date"]}>
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            onChange={handleChangeDatePicker}
            selectsRange
            calendarContainer={CardContainer}
            monthsShown={2}
            customInput={<CustomInput />}
            dateFormat="dd MMMM yyyy"
            popperModifiers={[
              {
                name: "offset",
                options: {
                  offset: [37, 10]
                }
              }
            ]}
            minDate={lastSixMonth}
            maxDate={yesterday}
            disabledKeyboardNavigation
          />
          <DownOutlined className={styles["main-card--date-icon"]} />
        </div>
      </div>
    </BaseCard>
  );
};

export default DatePickerCard;
