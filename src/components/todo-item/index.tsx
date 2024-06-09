import React, { useCallback, useState } from 'react';

import { variantConfig } from './constants';
import { TodoDataType, styles } from 'src/constants';
import StyledButton from '../button';
import { EditIcon } from 'src/icons';
import styles1 from './styles.module.css';

export type TodoItemPropsType = {
  title: string;
  variant: 'default' | 'success' | 'error';
  data: TodoDataType[];
  todoData: TodoDataType[];
  setTodoData: (_payload: TodoDataType[]) => void;
};

const TodoItem: React.FC<TodoItemPropsType> = ({
  title,
  variant = 'default',
  data,
  todoData,
  setTodoData,
}) => {
  const [editedValue, setEditedValue] = useState('');

  const { color, borderColor } = variantConfig[variant];

  const renderActionButton = (item: TodoDataType) => {
    if (item.status === 'open') {
      return (
        <>
          <StyledButton variant="success" onClick={() => changeTaskStatus('completed', item)}>
            Completed
          </StyledButton>
          <StyledButton variant="error" onClick={() => changeTaskStatus('pending', item)}>
            Pending
          </StyledButton>
        </>
      );
    }
    if (item.status === 'completed') {
      return (
        <>
          <StyledButton variant="default" onClick={() => changeTaskStatus('open', item)}>
            Open
          </StyledButton>
          <StyledButton variant="error" onClick={() => changeTaskStatus('pending', item)}>
            Pending
          </StyledButton>
        </>
      );
    }
    if (item.status === 'pending') {
      return (
        <>
          <StyledButton variant="default" onClick={() => changeTaskStatus('open', item)}>
            Open
          </StyledButton>
          <StyledButton variant="success" onClick={() => changeTaskStatus('completed', item)}>
            Completed
          </StyledButton>
        </>
      );
    }
  };

  const changeTaskStatus = useCallback(
    (newStatus: 'open' | 'completed' | 'pending', item: TodoDataType) => {
      console.log(item);
      const newItem: TodoDataType = { ...item, status: newStatus };
      const newTodoData = todoData.filter((todo) => todo.id !== item.id);
      newTodoData.push(newItem);

      setTodoData(newTodoData);
    },
    [setTodoData, todoData],
  );

  const handleEditTask = useCallback(
    (id: number) => {
      const newTodoData = todoData.map((todo) => {
        if (todo.id === id) {
          setEditedValue(todo.name);
          return {
            ...todo,
            isEdit: !todo.isEdit,
          } as TodoDataType;
        }

        return todo;
      });

      setTodoData(newTodoData);
    },
    [setTodoData, todoData],
  );

  const handleEnterToUpdateText = useCallback(
    (id: number) => {
      const newTodoData = todoData.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit: !todo.isEdit,
            name: editedValue,
          } as TodoDataType;
        }

        return todo;
      });

      setTodoData(newTodoData);
    },
    [editedValue, setTodoData, todoData],
  );

  return (
    <div className={styles1.container} style={styles}>
      <p className={styles1.title} style={{ color }}>
        {title}
      </p>
      <hr style={{ borderColor }} />
      <div style={{ margin: '12px 20px 0 20px' }}>
        {data.map((item, index) => (
          <div
            className={item.isEdit ? styles1.wrapperItemEdited : styles1.wrapperItem}
            style={styles}
            key={`${item.id}-${index}`}>
            <div className={styles1.item}>
              {item.isEdit ? (
                <div>
                  <p className={styles1.textInputItem}>Press enter to update</p>
                  <input
                    className={styles1.inputItem}
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleEnterToUpdateText(item.id);
                      }
                    }}
                  />
                </div>
              ) : (
                <p className={styles1.textItem}>{item.name}</p>
              )}
            </div>
            <div className={styles1.wrapperButtonEdit}>
              {renderActionButton(item)}
              <EditIcon
                className={styles1.editIcon}
                width={18}
                onClick={() => handleEditTask(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoItem;
