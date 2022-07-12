type EditableLinkFormType = {
  isVisible: boolean;
  title: string;
  url: string;
};

// Best to have this managed by backend
type Link = {
  id: string;
  title: string;
  url: string;
  logoUrl?: string | null;
};

type EditableProfileFormType = {
  displayName: string;
  bio: string;
};
