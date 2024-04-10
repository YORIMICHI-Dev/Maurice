# Generate 3D model with TripoSR
## Summary
This app generates 3D model (obj file) with TripoSR.

TripoSR Github:
(https://github.com/YORIMICHI-Dev/TripoSR)

## Develop environment
<b>Application Server</b>
<ui>
    <li>.NET8.0 (static files server)</li>
    <li>Fast API 0.110.1 (generate 3D model with TripoSR server)</li>
    <li>Nuxt3 3.11 (web app view server)</li>
</ui>

## Getting Started
### Installation
<ui>
    <li>.NET 8.0</li>
    <li>Python 3.12</li>
</ui>

### Local launch server
For launching Web app server, use dotnet run in Backend directory.
```c#
dotnet run
```

For launching TripoSR server, create virtual environment in PythonServer directory.
```sh
python -m venv venv
./venv/Script/activate
pip install -r requirements
```

After that, use bach file for running uvicorn in PythonServer directory.
```sh
./uvicorn_develop.sh
```
