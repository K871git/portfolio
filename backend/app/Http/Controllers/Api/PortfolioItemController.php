<?php
namespace App\Http\Controllers\Api;

use App\Models\PortfolioItem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PortfolioItemController extends Controller
{
    public function index()
    {
        return PortfolioItem::orderBy('created_at', 'desc')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'image_url'   => 'nullable|url',
            'project_url' => 'nullable|url',
        ]);

        return PortfolioItem::create($data);
    }

    public function show(PortfolioItem $portfolioItem)
    {
        return $portfolioItem;
    }

    public function update(Request $request, PortfolioItem $portfolioItem)
    {
        $data = $request->validate([
            'title'       => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'image_url'   => 'nullable|url',
            'project_url' => 'nullable|url',
        ]);

        $portfolioItem->update($data);
        return $portfolioItem;
    }

    public function destroy(PortfolioItem $portfolioItem)
    {
        $portfolioItem->delete();
        return response()->noContent();
    }
}
