import React, { useState } from "react";
import { UPDATE_USERS_CONTENTS_STATUS } from "~/queries/contents.graphql";
import { useMutation } from "@apollo/react-hooks";
import { Map_Users_Contents_Status_Update_Column } from "~/generated/graphql";

import "./control.css";

const Control = props => {
  const page_shift = props.page_shift;
  const scale_unit = props.scale_unit;
  const [editMode, setEditMode] = useState(false);
  const [updateUsersContentsStatus] = useMutation(UPDATE_USERS_CONTENTS_STATUS);

  const dispatchEvent = async page => {
    const updateData = {
      content_id: props.content_id,
      current_page: page
    };

    const updateColumns = [Map_Users_Contents_Status_Update_Column.CurrentPage];

    console.log("changing page");

    await updateUsersContentsStatus({
      variables: {
        data: [updateData],
        update_columns: updateColumns
      }
    });
  };

  const next_handler = () => {
    if (props.page_count >= props.current_page + page_shift) {
      props.setCurrentPage(props.current_page + page_shift);

      dispatchEvent(props.current_page + page_shift);
    }
  };

  const prev_handler = () => {
    if (props.current_page - page_shift < 0) return;

    props.setCurrentPage(props.current_page - page_shift);

    dispatchEvent(props.current_page + page_shift);
  };

  const handle_pageChange = number => {
    props.setCurrentPage(parseInt(number));
    dispatchEvent(parseInt(number));
  };

  const zoomIn_handler = () => {
    props.setScale(props.scale + scale_unit);
  };

  const zoomOut_handler = () => {
    props.setScale(props.scale - scale_unit);
  };

  const changeMode = () => {
    if (props.page_shift == 1) props.setPageShift(2);
    else props.setPageShift(1);
  };

  const page_changed = page_number => {
    props.setCurrentPage(page_number);
  };

  return (
    <div className="control">
      <PrevButton handler={prev_handler} />
      {editMode === false && (
        <PageLabel
          handler={page_changed}
          current_page={props.current_page}
          page_shift={page_shift}
          setEditMode={setEditMode}
          page_count={props.page_count}
        />
      )}

      {editMode && (
        <PageInput
          current_page={props.current_page}
          handler={handle_pageChange}
          setEditMode={setEditMode}
        />
      )}

      <NextButton handler={next_handler} />
      <ZoomIn handler={zoomIn_handler} />
      <ZoomOut handler={zoomOut_handler} />
      <ViewMode view_mode={page_shift} changeMode={changeMode} />
    </div>
  );
};

const PageInput = props => {
  const [value, setValue] = useState(props.current_page);

  const handleChange = e => {
    setValue(e.target.value);
    e.preventDefault();
  };

  const keyUp = e => {
    if (e.keyCode === 13) {
      props.handler(value);
      props.setEditMode(false);
    }

    e.preventDefault();
  };

  return (
    <input
      value={value}
      style={{ maxWidth: "30px" }}
      onChange={handleChange}
      onKeyUp={keyUp}
    />
  );
};

const PageLabel = props => {
  let label = props.current_page + "/" + props.page_count;

  if (props.page_shift === 2)
    label =
      props.current_page +
      "-" +
      (props.current_page + 1) +
      "/" +
      props.page_count;

  return <button onClick={() => props.setEditMode(true)}>{label}</button>;
};

const ViewMode = props => {
  let vmode = 1;

  if (props.view_mode === 1) vmode = 2;

  return (
    <button onClick={props.changeMode} title="Хуудасны горим">
      {vmode}х
    </button>
  );
};

const NextButton = props => {
  return (
    <button title="Дараах хуудас" onClick={props.handler}>
      {">"}
    </button>
  );
};

const PrevButton = props => {
  return (
    <button title="Өмнөх хуудас" onClick={props.handler}>
      {"<"}
    </button>
  );
};

const ZoomIn = props => {
  return (
    <button title="Томруулах" onClick={props.handler}>
      +
    </button>
  );
};

const ZoomOut = props => {
  return (
    <button title="Жижигрүүлэх" onClick={props.handler}>
      -
    </button>
  );
};

export default Control;
