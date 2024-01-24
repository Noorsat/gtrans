import myAxios from "./axios"

export const getMarketplaceOrders = async () => {
  const response = await myAxios.get("/marketplace")
  return response
}

export const getMarketplaceMyOrders = async (token) => {
  const response = await myAxios.get("/marketplace/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

export const getMarketplaceRequestsByOrderId = async (id) => {
  const response = await myAxios.get("/requests/" + id)
  return response
}

export const getMarketplaceRequestsByUserId = async (token) => {
  const response = await myAxios.get("/requests/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

export const createMarketplaceOrder = async (body, token) => {
  const response = await myAxios.post("/marketplace", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

export const createMarketplaceRequest = async (body, token) => {
  const response = await myAxios.post("/requests", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

export const getMarketplaceByOrderId = async (id) => {
  const response = await myAxios.get("/marketplace/" + id)
  return response
}

export const getCurrency = async () => {
  const response = await myAxios.get("currency")
  return response
}
