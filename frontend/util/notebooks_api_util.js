export const fetchNotebooks = () => {
  return $.ajax({
    method: 'get',
    url: 'api/notebooks'
  });
};

export const postNotebook = (notebook) => {
  return $.ajax({
    method: 'post',
    url: 'api/notebooks',
    data: {
      notebook
    }
  });
};

export const patchNotebook = (notebook) => {
  return $.ajax({
    method: 'patch',
    url: `api/notebooks/${notebook.id}`,
    data: {
      notebook
    }
  });
};

export const deleteNotebook = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/notebooks/${id}`
  });
};
