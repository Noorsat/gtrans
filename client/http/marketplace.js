import myAxios from "./axios"

export const createMarketplaceOrder = async (body, token) => {
  const response = await myAxios.post("/marketplace", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

export const getMarketplaceOrders = async (token) => {
  const response = await myAxios.get("/marketplace", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

export const createMarketplaceOffer = async (body, token) => {
  const response = await myAxios.post("/requests", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}
