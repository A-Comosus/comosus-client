type EditableLinkFormType = {
  isVisible: boolean;
  title: string;
  url: string;
};

// Best to have this managed by backend
type EditableLink = {
  id: string;
  isVisible: boolean;
  title?: string | null;
  url?: string | null;
  logoUrl?: string | null;
};

type PublicLink = {
  id: string;
  title: string;
  url: string;
  logoUrl?: string | null;
};

type EditableProfileFormType = {
  displayName: string;
  bio: string;
};
