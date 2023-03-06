import { UserBusiness } from "../../src/business/UserBusiness"
import { LoginInputDTO, SignupInputDTO } from "../../src/dtos/userDTO"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("signup", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Retornar token de sign da conta normal", async () => {
        const input: SignupInputDTO = {
            name: "Normal Mock",
            email: "normal1@email.com",
            password: "bananinha",
        }

        const response = await userBusiness.signup(input)

        expect(response.token).toBe("token-mock-normal")
    })
})
