type Method = "GET" | "POST" | "PUT" | "DELETE";

interface AxiosRequestConfig {
  method?: Method;
  url: string;
  data?: any;
}

interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

function axios<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  const { method = "GET", url, data } = config;

  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  }).then(async (response) => {
    const responseData = await response.json();
    return {
      data: responseData,
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
    };
  });
}

export default axios;
