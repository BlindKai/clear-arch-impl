import { Request, Response } from "express";

export abstract class BaseController {
  protected abstract executeImpl(req: Request, res: Response): Promise<void | any>;

  public async execute(req: Request, res: Response): Promise<void | any> {
    try {
      await this.executeImpl(req, res);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      console.log(err);
      this.internalServerError(res, "An unexpected error occurred");
    }
  }

  static json(res: Response, code: number, message: string, data?: any) {
    return res.status(code).json({ status: "success", message, data });
  }

  static error(res: Response, code: number, message: string, err?: any) {
    return res.status(code).json({ status: "error", message, err });
  }

  ok(res: Response, message?: string | null, data?: object | object[]) {
    return BaseController.json(res, 200, message || "OK", data);
  }

  created(res: Response, message?: string | null) {
    return BaseController.json(res, 201, message || "Created");
  }

  noContent(res: Response, message?: string | null) {
    return BaseController.json(res, 204, message || "No Content");
  }

  badRequest(res: Response, message?: string | null, error?: object) {
    return BaseController.error(res, 400, message || "Bad Request", error);
  }

  unauthorized(res: Response, message?: string | null, error?: object) {
    return BaseController.error(res, 401, message || "Unauthorized", error);
  }

  forbidden(res: Response, message?: string | null, error?: object) {
    return BaseController.error(res, 403, message || "Forbidden", error);
  }

  notFound(res: Response, message?: string | null, error?: object) {
    return BaseController.error(res, 404, message || "Not Found", error);
  }

  conflict(res: Response, message?: string | null, error?: object) {
    return BaseController.error(res, 409, message || "Conflict", error);
  }

  unprocessableEntity(res: Response, message?: string | null, error?: object) {
    return BaseController.error(res, 422, message || "Unprocessable Entity", error);
  }

  tooManyRequests(res: Response, message?: string | null, error?: object) {
    return BaseController.error(res, 429, message || "Too Many Requests", error);
  }

  internalServerError(res: Response, message?: string | null) {
    return BaseController.error(res, 500, message || "Internal Server Error");
  }
}
