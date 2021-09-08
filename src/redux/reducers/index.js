const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_HEADER':
      return {
        ...state,
        header: action.payload
      }
    case 'SET_PROFILE':
      return {
        ...state,
        sections: {
          ...state.sections,
          profile: action.payload
        }
      }
    case 'SET_OBJECTIVES':
      return {
        ...state,
        sections: {
          ...state.sections,
          objectives: action.payload
        }
      }
    case 'SET_EXPERIENCES':
      return {
        ...state,
        sections: {
          ...state.sections,
          experiences: action.payload
        }
      }
    case 'SET_PROJECTS':
      return {
        ...state,
        sections: {
          ...state.sections,
          projects: action.payload
        }
      }
    case 'SET_SKILLS':
      return {
        ...state,
        sections: {
          ...state.sections,
          skills: action.payload
        }
      }
    case 'SET_STUDIES':
      return {
        ...state,
        sections: {
          ...state.sections,
          studies: action.payload
        }
      }
    case 'SET_CERTIFICATES':
      return {
        ...state,
        sections: {
          ...state.sections,
          certificates: action.payload
        }
      }
    case 'SET_LANGUAGES':
      return {
        ...state,
        sections: {
          ...state.sections,
          languages: action.payload
        }
      }
    default:
      return state;
  }
}

export default reducer;