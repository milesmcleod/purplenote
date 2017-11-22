export const fetchNotes = () => {
  return $.ajax({
    method: 'get',
    url: 'api/notes'
  });
};

export const postNote = (note) => {
  return $.ajax({
    method: 'post',
    url: 'api/notes',
    data: {
      note
    }
  });
};

export const patchNote = (note) => {
  return $.ajax({
    method: 'patch',
    url: `api/notes/${note.id}`,
    data: {
      note
    }
  });
};

export const deleteNote = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/notes/${id}`
  });
};
