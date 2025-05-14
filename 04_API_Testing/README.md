# 04 API Testing

This module demonstrates my ability to test RESTful APIs using Postman and document the process. The example tested is a mock user login endpoint. The test validates proper response codes, error handling, and JSON response structure.

## Tools Used
- Postman (for sending and validating HTTP requests)
- JSON schema validator (as payload format)
- Excel (for test case documentation)
- GitHub (for documentation and version control)

## Test Scope
- Validate login with correct and incorrect credentials
- Ensure proper error handling with invalid or missing inputs
- Verify HTTP status codes, response payloads, and headers
- Assess API behavior for edge cases like invalid JSON format

## Test Cases

The included spreadsheet api-test-cases.xlsx documents the following:

- Test case ID and description
- HTTP method and endpoint
- Input payload or request data
- Expected status codes and responses

### Sample API Endpoint:

POST /api/login

## Module Contents:

### 04_API_Testing/
| File                              | Purpose                                 |
| --------------------------------- | --------------------------------------- |
| `postman_collection.json`         | Exported test collection                |
| [`test-report.md `](test-report.md ) | Summary of testing session           |
| `api-test-cases.xlsx `            | API test case documentation             |
| [`README.md`](README.md)          | Overview of API Testing module          |
| `screenshots/`                    | Screenshots of Postman Results          |