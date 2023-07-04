export interface IPageProps {
  cookies: {
    'webchat:name'?: string;
    'webchat:perfilUrl'?: string;
    'webchat:email'?: string;
    'session' ?: string;
  };
  user?: {
    id: string;
    name: string;
    email: string;
    perfil_url: string;
  };
}
